import { screen, render, fireEvent } from '@testing-library/react';
import { SummaryForm } from '../../../components';
import userEvent from '@testing-library/user-event';

//UNIT TEST FOR INITIAL STATE
describe('initial conditions', () => {
  render(<SummaryForm />);
  let confirmButton = screen.getByRole('button', {
    labelText: /confirm order/i,
  });
  let termsCheckbox = screen.getByRole('checkbox', {
    name: /terms and conditions/i,
  });

  test('Terms checkbox defaults to unchecked', () => {
    expect(termsCheckbox).not.toBeChecked();
  });

  test('Confirm button is disabled', () => {
    expect(confirmButton).toBeDisabled();
  });
});

test('Confirm order button is enabled when "confirm" checkbox is checked and disabled when clicked again', async () => {
  //API
  const user = userEvent.setup();

  render(<SummaryForm />);

  //get the order button and the checkbox
  let confirmButton = screen.getByRole('button', {
    labelText: /confirm order/i,
  });
  let termsCheckbox = screen.getByRole('checkbox', {
    name: /terms and conditions/i,
  });

  //mimic the user clicking on the checkbox

  //An API call, thus returns Promise
  await user.click(termsCheckbox);
  expect(confirmButton).toBeEnabled();

  //mimic the user clicking again on the checkbox
  await user.click(termsCheckbox);
  expect(confirmButton).toBeDisabled();
});

test('Popover responds to hover', async () => {
  const user = userEvent.setup();

  render(<SummaryForm />);

  const termsText = screen.getByRole;
  const termsPopover = screen.getBy;
});
