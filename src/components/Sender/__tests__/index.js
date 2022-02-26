import { render } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import Sender from "../index"

describe("<Sender/>", () => {
  const onAddMessage = jest.fn()

  it("Снимок", () => {
    const { asFragment } = render(<Sender onAddMessage={onAddMessage} />)
    expect(asFragment()).toMatchSnapshot()
  })

  it("Обработчик `onAddMessage` вызывается корректно", () => {
    const { getByRole } = render(<Sender onAddMessage={onAddMessage} />)

    userEvent.type(getByRole("textbox"), "Hello world")
    userEvent.click(getByRole("button"))

    expect(onAddMessage.mock.calls[0][0].message).toEqual("Hello world")
  })
})