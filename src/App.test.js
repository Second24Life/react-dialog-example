import { render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import App from "./App"

function removeRandomValues(getAllByTestId) {
  getAllByTestId("remove-message").forEach(element => {
    element.removeAttribute("data-id")
  })

  getAllByTestId("time").forEach(element => {
    element.innerHTML = "09:00"
  })
}

describe("<App/>", () => {
  it("Обычное состояние", () => {
    const { asFragment } = render(<App />)
    expect(asFragment()).toMatchSnapshot()
  })

  it("Отправка сообщения", () => {
    const { asFragment, getByRole, getAllByTestId } = render(<App />)
    const elements = getAllByTestId("message-item")

    userEvent.type(getByRole("textbox"), "Hello world")
    userEvent.click(getByRole("button"))

    expect(getAllByTestId("message-item").length - elements.length).toBe(1)

    // Для снимка
    removeRandomValues(getAllByTestId)
    expect(asFragment()).toMatchSnapshot()
  })

  it("Удаление сообщения", () => {
    const { asFragment, getAllByTestId } = render(<App />)
    const elements = getAllByTestId("message-list-item")

    userEvent.click(getAllByTestId("remove-message")[0])
    expect(elements.length - getAllByTestId("message-list-item").length).toBe(1)

    // Для снимка
    removeRandomValues(getAllByTestId)
    expect(asFragment()).toMatchSnapshot()
  })

  it("Смена темы", () => {
    const { asFragment, getByTestId } = render(<App />)
    const element = getByTestId("theme")

    expect(element.getAttribute("data-theme")).toBe("light")
    userEvent.click(element)
    expect(element.getAttribute("data-theme")).toBe("dark")
    expect(asFragment()).toMatchSnapshot()
  })
})