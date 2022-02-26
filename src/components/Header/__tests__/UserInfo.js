import { render } from "../../../testUtils"
import UserInfo from "../UserInfo"

test("Снимок для <UserInfo/>", () => {
  const { asFragment } = render(<UserInfo />)
  expect(asFragment()).toMatchSnapshot()
})