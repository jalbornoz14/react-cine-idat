import { fireEvent, screen, render } from "@testing-library/react"
import "@testing-library/jest-dom"
import { Reservation } from './Reservation'

describe("Validar Formulario", () => {
    test("Validar campos furmulario", () => {
        render(<Reservation />)

        const btn = screen.getByText("RESERVAR")
        fireEvent.click(btn)

        // ejecutar el componente
        expect(screen.getByTestId("erroForm")).toHaveTextContent(
            "Porfavor, falta completar datos"
        )
    })
})