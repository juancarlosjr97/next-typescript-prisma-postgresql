import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "@/components/Header.module.css";

const Header: React.FC = () => {
  const router = useRouter();

  const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname;

  return (
    <nav>
      <div className={styles.left}>
        <Link href="/" legacyBehavior>
          <a
            className={styles.bold}
            data-active={isActive("/")}
            data-testid="link-home"
          >
            Home
          </a>
        </Link>
        <Link href="/post/drafts" legacyBehavior>
          <a data-active={isActive("/post/drafts")} data-testid="link-drafts">
            Drafts
          </a>
        </Link>
      </div>

      <div className={styles.right}>
        <Link href="/post/create" legacyBehavior>
          <a
            data-active={isActive("/post/create")}
            data-testid="link-create-draft"
          >
            + Create draft
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
