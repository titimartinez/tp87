import Casilla from './Casilla';
import './Tablero.css';
import { useEffect, useState } from "react";
function Tablero() {
    const [tablero, setTablero] = useState(
        [
            ['\u265C', '\u265E', '\u265D','\u265A', '\u265A', '\u265D', '\u265E', '\u265C'],
            ['\u265F', '\u265F', '\u265F','\u265F', '\u265F', '\u265F', '\u265F', '\u265F'],
            ['', '', '','', '', '', '', ''],
            ['', '', '','', '', '', '', ''],
            ['', '', '','', '', '', '', ''],
            ['', '', '','', '', '', '', ''],
            ['\u2659', '\u2659', '\u2659','\u2659', '\u2659', '\u2659', '\u2659', '\u2659'],
            ['\u2656', '\u2658', '\u2657','\u2655', '\u2654', '\u2657', '\u2658', '\u2656']
        ]
    )
    useEffect(() => {

        function drag(ev) {
            ev.dataTransfer.setData("fila", ev.target.attributes.fila.value);
            ev.dataTransfer.setData("columna", ev.target.attributes.columna.value);
            ev.dataTransfer.setData("valor", ev.target.attributes.valor.value);
        }

        function permitirDrop(ev) {
            ev.preventDefault();
        }

        function drop(ev) {

            ev.preventDefault();
            const fila = parseInt(ev.dataTransfer.getData("fila"))
            const columna = parseInt(ev.dataTransfer.getData("columna"))
            const valor = ev.dataTransfer.getData("valor")
            let nuevo = [...tablero];
            for (let f = 0; f < 8; f++) {
                for (let c = 0; c < 8; c++) {
                    if (parseInt(ev.target.attributes.fila.value) === f && parseInt(ev.target.attributes.columna.value) === c) {
                        nuevo[f][c] = valor
                        if (f!==fila || c!==columna)
                            nuevo[fila][columna] = ''
                    }
                }
            }
            setTablero(nuevo)
        }

        const casillas = document.querySelectorAll('.casilla')
        for (let casilla of casillas) {
            casilla.addEventListener('dragstart', drag)
            casilla.addEventListener('dragover', permitirDrop);
            casilla.addEventListener('drop', drop);
        }
        return () => {
            const casillas = document.querySelectorAll('.casilla')
            for (let casilla of casillas) {
                casilla.removeEventListener('dragstart', drag)
                casilla.removeEventListener('dragover', permitirDrop);
                casilla.removeEventListener('drop', drop);
            }
        }
    }, [tablero])

    return (
        <div className="tablero">
            {tablero.map((fila, indicef) => {
                return fila.map((casilla, indicec) => {
                    return (<Casilla valor={casilla} fila={indicef} columna={indicec} key={indicef + indicec} pieza={casilla} color={(indicef + indicec) % 2 === 0 ? 'blanco' : 'negro'} />)
                })
            })}
        </div>
    );
}

export default Tablero