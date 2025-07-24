// supabase/functions/update-display-name/index.ts
import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.43.1";

serve(async (req) => {
  if (req.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  try {
    const { display_name, user_id } = await req.json();

    if (!display_name || typeof display_name !== "string") {
      return new Response(
        JSON.stringify({ error: "display_name is required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // 1) Hole das JWT vom aufrufenden Client
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      return new Response("Missing Authorization header", { status: 401 });
    }

    // 2) Supabase-Admin-Client mit Service Role Key
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
      {
        global: { headers: { Authorization: authHeader } }, // damit getUser() das JWT kennt
      }
    );

    // 3) Bestimme, wessen Name geändert werden soll
    let targetUserId = user_id;
    if (!targetUserId) {
      // wenn kein user_id mitgegeben, nimm den aufrufenden User
      const { data: { user }, error: userErr } = await supabase.auth.getUser();
      if (userErr || !user) {
        return new Response(JSON.stringify({ error: "Invalid token" }), {
          status: 401,
          headers: { "Content-Type": "application/json" },
        });
      }
      targetUserId = user.id;
    }

    // 4) Update in auth.users (user_metadata)
    const { error: updateErr } = await supabase.auth.admin.updateUserById(
      targetUserId,
      {
        user_metadata: { display_name },
      }
    );

    if (updateErr) throw updateErr;

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
});
