// app/components/Footer.js
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className={`${styles.footer}`}>
        <p>© 2024 Flowers. All rights reserved.

1234 Street Name, City, State, ZIP Code | Phone: (123) 456-7890 | Email: flower@gmail.com

Follow us on:

Facebook
Twitter
Instagram
LinkedIn
Privacy Policy | Terms of Service | Contact Us

</p>
      </footer>
    </>
  );
}
