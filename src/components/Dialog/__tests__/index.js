import { render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Dialog from "../"

test("<Dialog/>", async () => {
  const { asFragment, getAllByTestId } = render(<Dialog />)
  const elements = getAllByTestId("message-list-item")

  expect(asFragment()).toMatchSnapshot()

  userEvent.click(getAllByTestId("remove-message")[0])
  expect(elements.length - getAllByTestId("message-list-item").length).toBe(1)

  expect(asFragment()).toMatchSnapshot()
})