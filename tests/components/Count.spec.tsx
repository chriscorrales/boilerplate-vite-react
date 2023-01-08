import React from 'react';
import { describe, expect, it } from 'vitest';

import Count from '../../src/components/Count';
import { render, screen, userEvent } from '../../src/utils/testUtils';

describe('Sample App vitest', () => {
  // describe -> Used to group the test and used to describe what is currently being tested
  it('should increment the count when icon (+) clicked', async () => {
    render(<Count />);
    userEvent.click(screen.getByText('+'));
    expect(await screen.findByText(/Count is 1/i));
  });

  it('should decrement the count when icon (-) clicked', async () => {
    render(<Count />);
    userEvent.click(screen.getByText('-'));
    expect(await screen.findByText(/Count is -1/i));
  });
});
