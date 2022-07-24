import { Outlet } from "react-router-dom"
import "./BusinessManApp.css"
import { NavLink } from "react-router-dom"
import Panel from "../../Images/Panel.svg";
import Account from "../../Images/Account.svg";
import Analytics from "../../Images/Analytics.svg";
import Messages from "../../Images/Messages.svg";
import Stats from "../../Images/Stats.svg";
import LC from "../../Images/LC.svg";
import Commercion from "../../Images/Commercion.svg";
import Distribution from "../../Images/Distribution.svg";

export default function () {

    return (
        <div className="business">
            <div className="business__side-panel">
                <NavLink style={({textDecoration: "none"})} to="control-panel">
                    <div className="side-panel__container">
                        <img src={Panel}></img>
                        <p className="side-panel__text">Панель</p>
                    </div>
                </NavLink>
                <NavLink style={({textDecoration: "none"})} to="living-complex">
                    <div className="side-panel__container">
                        <img src={LC}></img>
                        <p className="side-panel__text">ЖК</p>
                    </div>
                </NavLink>
                <NavLink style={({textDecoration: "none"})} to="commercion">
                    <div className="side-panel__container">
                        <img src={Commercion}></img>
                        <p className="side-panel__text">Коммерция</p>
                    </div>
                </NavLink>
                <NavLink style={({textDecoration: "none"})} to="distribution">
                    <div className="side-panel__container">
                        <img src={Distribution}></img>
                        <p className="side-panel__text">Рассылки</p>
                    </div>
                </NavLink>
                <NavLink style={({textDecoration: "none"})} to="analytics">
                    <div className="side-panel__container">
                        <img src={Analytics}></img>
                        <p className="side-panel__text">Аналитика</p>
                    </div>
                </NavLink>
                <NavLink style={({textDecoration: "none"})} to="statistics">
                    <div className="side-panel__container">
                        <img src={Stats}></img>
                        <p className="side-panel__text">Отчетность</p>
                    </div>
                </NavLink>
                <NavLink style={({textDecoration: "none"})} to="messages">
                    <div className="side-panel__container">
                        <img src={Messages}></img>
                        <p className="side-panel__text">Сообщения</p>
                    </div>
                </NavLink>
                <NavLink style={({textDecoration: "none"})} to="account">
                    <div className="side-panel__container">
                        <img src={Account}></img>
                        <p className="side-panel__text">Аккаунт</p>
                    </div>
                </NavLink>
            </div>
            <Outlet>

            </Outlet>
        </div>
    )
}