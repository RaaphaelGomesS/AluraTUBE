import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://nhwibwgqmqervdmyedzx.supabase.co";
const PUBLIC_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5od2lid2dxbXFlcnZkbXllZHp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgyNjQ5MDAsImV4cCI6MTk4Mzg0MDkwMH0.eDToZzIloQU6thNP9uDQHVazBb-9C5I54Zxnl-yJ2YY";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
  return {
    getAllVideos() {
      return supabase.from("video").select("*");
    }
  };
}
