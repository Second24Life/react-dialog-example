import userEvent from "@testing-library/user-event"
import { render } from "../../../testUtils"
import Header from "../"

test("<Header/>", () => {
  const { getByTestId, asFragment } = render(<Header />)
  const element = getByTestId("theme")

  expect(asFragment()).toMatchSnapshot()

  expect(element.getAttribute("data-theme")).toBe("light")
  userEvent.click(element)
  expect(element.getAttribute("data-theme")).toBe("dark")

  expect(asFragment()).toMatchSnapshot()
})