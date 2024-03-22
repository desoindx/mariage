import { serialize } from "cookie";
import bcrypt from "bcrypt";

const saltRounds = 10;

export async function POST(request: Request) {
  const data: { password: string } = await request.json();
  const password = data.password;

  if (
    process.env.MAIN_PAGE_PASSWORD !== password &&
    process.env.SECOND_PAGE_PASSWORD !== password
  ) {
    return new Response("incorrect password", {
      status: 401,
    });
  }
  const salt = await bcrypt.genSaltSync(saltRounds);
  const hash = await bcrypt.hashSync(process.env.PAGE_PASSWORD!, salt);

  const cookie = serialize(process.env.PASSWORD_COOKIE_NAME!, hash, {
    httpOnly: true,
    path: "/",
  });

  return new Response("password correct", {
    status: 200,
    headers: {
      "Set-Cookie": cookie,
    },
  });
}
