import React, { ReactNode, useEffect, useState } from 'react';
import styles from '../../styles/Nav.module.css';
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { setMenu } from "../../lib/store/session";
import Link from 'next/link';




export default function Navbar() {
    let menu_lists = [
        {
            id: 1,
            menu_name: "Home",
            icon: "bi bi-house-door-fill",
            path: "/",
            check: true
        },
        {
            id: 2,
            menu_name: "Skills",
            icon: "bi bi-pencil-fill",
            path: "/skills",
            check: false
        },
        {
            id: 3,
            menu_name: "Portfolio",
            icon: "bi bi-file-earmark-break",
            path: "/portfolio",
            check: false
        },
        {
            id: 4,
            menu_name: "About",
            icon: "bi bi-file-person",
            path: "/about",
            check: false
        },
        {
            id: 5,
            menu_name: "Contact us",
            icon: "bi bi-telephone",
            path: "/contact",
            check: false
        }
    ];
    const menu = useSelector((state: any) => state.session.menu);
    const dispatch = useDispatch();
    const [select, setSelect]: any = useState(menu);
    const route = useRouter();
    let initialized = false;

    useEffect(() => {
        if (!initialized) {
            if (select) dispatch(setMenu(select));
            if (!select) dispatch(setMenu(0));
            let id_sel = localStorage.getItem('path__________');
            let f: any = menu_lists.find(e => e.id === Number(id_sel));
            route.replace(`${f.path}`);
        }
    }, [select]);

    // useEffect(() => {
    //     console.log(123131);

    // }, []);



    let f_menu = menu_lists.map((el: any) =>
        <div key={el.id} className={el.id == menu ? styles.bg_is_hover : styles.bg_not_hover} onClick={() => { setSelect(el.id); }}>
            <p className={el.id == menu ? styles.menu_item_1 : styles.menu_item_0}>
                <i className={el.icon}></i>
                &nbsp;
                {el.menu_name}
            </p>
        </div>
    );


    return (
        <div className={styles.nav}>
            <div className={styles.logoname}>
                <div className={styles.item_text}>
                    <div className={styles.char1}>A</div>
                    <div className={styles.char2}>T</div>
                    <div className={styles.char3}>I</div>
                    <div className={styles.char4}>T</div>
                    <div>&nbsp;</div>
                    <div>&nbsp;</div>
                    <div className={styles.char5}>K</div>
                    <div className={styles.char6}>H</div>
                    <div className={styles.char7}>A</div>
                    <div className={styles.char8}>O</div>
                    <div className={styles.char9}>E</div>
                    <div className={styles.char10}>A</div>
                    <div className={styles.char11}>M</div>
                    {/* <div className={styles.linee1}></div> */}
                </div>
            </div>
            <div className={styles.menu}>
                {
                    f_menu
                }
            </div>
        </div>
    );
}
