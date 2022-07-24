import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../Images/Logo.svg";
import "./Autorization.css";
import { Select, RadioGroup, Radio, Button, Slider } from '@mantine/core';

export default function Autorization() {

    const [rangeValue, setRangeValue] = useState(0);
    const [value, setValue] = useState('');
    const [ disabled, setDisabled ] = useState(false);

    return (
        <div style={(disabled || window.location.pathname !== "/" ? {display: "none"} : {})} className="autorization">
            <div className="autorization__title">
                <img src={Logo}></img>
                <h1 style={({color: "white"})}>Letsbot</h1>
            </div>
            <div className="autorization__content">
                <h2 style={({margin: "40px 80px 40px 80px"})}>Приветствуем в <span style={({color: "#6C5DD3"})}>Letsbot</span>👋</h2>

                <RadioGroup
                    style={({marginTop: "30px", width: "80%"})}
                    value={value}
                    onChange={setValue}
                    description="Выберите роль"
                    spacing="xl"
                    required
                >
                    <Radio value="business" label="Бизнес" />
                    <Radio value="investor" label="Инвестор" />
                </RadioGroup>

                <Select
                    style={({marginTop: "30px", width: "80%"})}
                    data={['1', '2', '3', '4']}
                    placeholder="Выберите сферу"
                    description="В какой сфере вы работаете?"
                    variant="filled"
                    size="md"
                    required
                />

                <Select
                    style={({marginTop: "30px", width: "80%"})}
                    data={['1', '2', '3', '4']}
                    placeholder="Выбрать на карте"
                    description="Выберите ЖК"
                    variant="filled"
                    size="md"
                    required
                />

                <div style={({width: "80%", marginTop: "30px", display: "flex", flexDirection: "row", alignItems: "center"})}>
                    <Slider
                        value={rangeValue} onChange={setRangeValue}
                        style={({width: "70%"})}
                        size="sm"
                        radius="xl"
                    />
                    <div style={({margin: "auto 0 auto auto"})}>
                        <p style={({margin: "auto 0 auto 20px", fontSize: "20px", fontWeight: "bolder", color: "#6C5DD3"})}>{rangeValue} млн</p>
                    </div>
                </div>

                <NavLink style={({textDecoration: "none",marginTop: "30px", width: "80%"})} to={value === "business" ? "/admin" : "/"} onClick={() => {setDisabled(true)}}>
                    <Button style={({width: "100%"})} color="#6C5DD3">
                        Далее
                    </Button>
                </NavLink>

                <p style={({fontSize: "14px"})}>Нужна помощь? <a href="tel:+79284309292">Связаться с поддержкой</a></p>
            </div>
        </div>
    )
}
