

export async function GET(request: Request) {
  // For example, fetch data from your DB here
  const users = {
    message: "login api working",
  };
  return new Response(JSON.stringify(users), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}
