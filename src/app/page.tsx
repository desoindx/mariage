import styles from "./page.module.css";
import { cookies } from "next/headers";
import Form from "@/components/Form";
import bcrypt from "bcrypt";
import MainPage from "@/components/MainPage";
import SecondPage from "@/components/SecondPage";

export default function Home() {
  const cookiesStore = cookies();
  const loginCookies = cookiesStore.get(process.env.PASSWORD_COOKIE_NAME!);
  const mainPage =
    loginCookies &&
    bcrypt.compareSync(process.env.MAIN_PAGE_PASSWORD!, loginCookies.value);

  if (mainPage) {
    return (
      <main>
        <MainPage />
      </main>
    );
  }

  const secondPage =
    loginCookies &&
    bcrypt.compareSync(process.env.SECOND_PAGE_PASSWORD!, loginCookies.value);
  if (secondPage) {
    return (
      <main>
        <SecondPage />
      </main>
    );
  }
  return (
    <main>
      <Form />
    </main>
  );
}
