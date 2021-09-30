import styles from './Sidebar.module.css'


import { SidebarData } from './SidebarData'

function Sidebar() {
    return (
        <div className={styles.sider}>
            <ul className={styles.siderbarList}>
                {SidebarData.map((val, key) => {
                    return (
                    <li
                        key={key}
                        className={styles.row}
                        id = {window.location.pathname == val.link ? "active" : ""}
                        onClick={() => {window.location.pathname = val.link;
                        }}
                    >

                    <div className={styles.rowIcon}>{val.icon}</div>
                    <div className={styles.rowTitle}>{val.title}</div>
                    </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default Sidebar
