import { test, expect } from '@playwright/test';

test('examples of different queries', () => {
  render(
    <div>
      <button>Submit</button>

      <input
        data-testid="username-input"
        aria-label="Username"
        placeholder="Enter username"
      />

      <p>Welcome User</p>
    </div>
  );

  // 1. getByRole()
  const button = screen.getByRole('button', { name: /submit/i });

  // 2. getByTestId()
  const inputByTestId = screen.getByTestId('username-input');

  // 3. getByLabelText() (often referred to as getByLabel)
  const inputByLabel = screen.getByLabelText('Username');

  // 4. getByPlaceholderText()
  const inputByPlaceholder =
    screen.getByPlaceholderText('Enter username');

  // 5. getByText()
  const welcomeText = screen.getByText('Welcome User');

  expect(button).toBeInTheDocument();
  expect(inputByTestId).toBeInTheDocument();
  expect(inputByLabel).toBeInTheDocument();
  expect(inputByPlaceholder).toBeInTheDocument();
  expect(welcomeText).toBeInTheDocument();
});