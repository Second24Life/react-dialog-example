import Item from "../Item"
import { render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import data from "../../../data"
import { normalizeDialog } from "../helpers"

const dialog = normalizeDialog(data)

test("<Item />", () => {
  const onRemove = jest.fn()
  const { asFragment, getAllByTestId } = render(<Item {...dialog[1]} onRemove={onRemove} />)

  expect(asFragment()).toMatchSnapshot()
  userEvent.click(getAllByTestId("remove-message")[0])

  expect(onRemove.mock.calls.length).toBe(1)
  expect(asFragment()).toMatchSnapshot()
})