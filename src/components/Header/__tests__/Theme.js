import userEvent from "@testing-library/user-event"
import { render } from "../../../testUtils"
import Theme from "../Theme"

test("<Theme/>", () => {
  const { getByTestId, asFragment } = render(<Theme />)
  const element = getByTestId("theme")

  expect(asFragment()).toMatchSnapshot()

  expect(element.getAttribute("data-theme")).toBe("light")
  userEvent.click(element)
  expect(element.getAttribute("data-theme")).toBe("dark")

  expect(asFragment()).toMatchSnapshot()
})