import Count from '@Components/Counter';
import { render, screen, userEvent } from '@Utils/testUtils';
import { describe, expect, it } from 'vitest';

describe('Sample App vitest', () => {
  it('should increment the count when icon (+) clicked', async () => {
    render(<Count />);
    userEvent.click(screen.getByText('+'));
    expect(await screen.findByText(/1/i));
  });

  it('should decrement the count when icon (-) clicked', async () => {
    render(<Count />);
    userEvent.click(screen.getByText('-'));
    expect(await screen.findByText(/-1/i));
  });
});
