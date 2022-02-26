import { render } from "@testing-library/react"
import * as icons from "../../../icons"
import Icon from "../index"

describe("Снимки для <Icon/>", () => {
  Object.keys(icons).forEach(name => {
    it(`Снимок для иконки ${name}`, () => {
      const { asFragment } = render(<Icon name={name} />)
      expect(asFragment()).toMatchSnapshot()
    })
  })
})