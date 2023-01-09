import React from 'react';
import { describe, expect, it } from 'vitest';

import Count from '../../src/components/Counter';
import { render, screen, userEvent } from '../../src/utils/testUtils';

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
