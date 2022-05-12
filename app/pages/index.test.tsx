import { useCurrentUser } from "app/core/hooks/useCurrentUser"

jest.mock("app/core/hooks/useCurrentUser")
const mockUseCurrentUser = useCurrentUser as jest.MockedFunction<typeof useCurrentUser>

test.skip("renders blitz documentation link", () => {
  // This is an example of how to ensure a specific item is in the document
  // But it's disabled by default (by test.skip) so the test doesn't fail
  // when you remove the the default content from the page
  // This is an example on how to mock api hooks when testing
  mockUseCurrentUser.mockReturnValue({
    id: 1,
    name: "washi",
    email: "gmail",
    emailVerified: new Date(),
    createdAt: new Date(),
    updatedAt: new Date(),
    profile: "washi",
    role: "USER",
    hashedPassword: "faljkfa",
    exp: 0,
  })
})
