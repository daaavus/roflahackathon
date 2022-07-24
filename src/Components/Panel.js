import "./Panel.css"
import { RingProgress } from '@mantine/core';

export default function Panel() {
    return (
        <div className="panel">
            <h3 className="panel__title">Панель управления</h3>
            <div className="panel__q-metrics">
                <div className="q-metrics__block">
                    <div className="q-metrics__text-block">
                        <p style={({fontFamily: "Manrope", color: "#808191", fontSize: "14px", margin: "0"})}>Продано</p>
                        <p style={({fontFamily: "Manrope", color: "#11142D", fontSize: "24px", fontWeight: "bold", margin: "0"})}>546</p>
                    </div>
                    <RingProgress
                        style={({marginRight: "20px"})}
                        sections={[{ value: 80, color: '#FD8539' }]}
                        size={70}
                    />
                </div>
                <div className="q-metrics__block">
                    <div className="q-metrics__text-block">
                        <p style={({fontFamily: "Manrope", color: "#808191", fontSize: "14px", margin: "0"})}>Доступны к продаже</p>
                        <p style={({fontFamily: "Manrope", color: "#11142D", fontSize: "24px", fontWeight: "bold", margin: "0"})}>48</p>
                    </div>
                    <RingProgress
                        style={({marginRight: "20px"})}
                        sections={[{ value: 20, color: '#6C5DD3' }]}
                        size={70}
                    />
                </div>
                <div className="q-metrics__block">
                    <div className="q-metrics__text-block">
                        <p style={({fontFamily: "Manrope", color: "#808191", fontSize: "14px", margin: "0"})}>Арендуется</p>
                        <p style={({fontFamily: "Manrope", color: "#11142D", fontSize: "24px", fontWeight: "bold", margin: "0"})}>126</p>
                    </div>
                    <RingProgress
                        style={({marginRight: "20px"})}
                        sections={[{ value: 40, color: '2ED480' }]}
                        size={70}
                    />
                </div>
                <div className="q-metrics__block">
                    <div className="q-metrics__text-block">
                        <p style={({fontFamily: "Manrope", color: "#808191", fontSize: "14px", margin: "0"})}>Арендаторы</p>
                        <p style={({fontFamily: "Manrope", color: "#11142D", fontSize: "24px", fontWeight: "bold", margin: "0"})}>90</p>
                    </div>
                    <RingProgress
                        style={({marginRight: "20px"})}
                        sections={[{ value: 90, color: '#FE6D8E' }]}
                        size={70}
                    />
                </div>
            </div>
            <div className=""></div>
            <div></div>
            <div></div>
        </div>
    )
}
