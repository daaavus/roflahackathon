import "./Header.css";
import Logo from "../../Images/Logo.svg";
import { Input } from '@mantine/core';
import { Search } from 'tabler-icons-react';

export default function Header() {
    return (
        <header className="header">
            <div className="header__title">
                <img src={Logo}></img>
                <p style={({fontSize: "25px", color: "#11142D", fontFamily: "Manrope, sans-serif", fontWeight: "bold"})}>Letsbot</p>
            </div>
            <Input
                style={({marginLeft: "10%", width: "17%"})}
                icon={<Search />}
                variant="filled"
                placeholder="Аналтика, сумма продаж, отчетность"
                radius="lg"
            />
            <div className="header__profile-block">
                <div>
                    <div>
                        <p>Админ</p>
                        <p>Компания застройщик</p>
                    </div>
                    <div>
                        <img></img>
                    </div>
                </div>
                <div></div>
                <div></div>
            </div>
        </header>
    )
}