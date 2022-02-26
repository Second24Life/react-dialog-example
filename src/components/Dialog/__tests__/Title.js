import Title from "../Title"
import { render } from "@testing-library/react"
import dayjs from "dayjs"

test("<Title />", () => {
  const { getByText, asFragment } = render(<Title date={dayjs().format("YYYY-MM-DD")} />)

  expect(getByText(/Сегодня/i)).toBeInTheDocument()
  expect(asFragment()).toMatchSnapshot()
})