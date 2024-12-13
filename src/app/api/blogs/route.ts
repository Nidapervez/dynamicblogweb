import techBlogs from "@/app/_lib/data";

export  function GET(){
  return new Response(JSON.stringify(techBlogs))
}