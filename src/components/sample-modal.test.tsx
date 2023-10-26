import { describe, test } from 'vitest'
import { render, screen, userEvent } from '../utils/test-utils'
import createWrapper from '@cloudscape-design/components/test-utils/dom';

import { SampleModal } from './sample-modal';

describe("SampleModal", () => {
  test("open modal and close", async () => {
      render(<SampleModal />);
      const wrapper = createWrapper();
      const modal = wrapper.findModal()!;

      // Open Modal
      await userEvent.click(screen.getByRole("button", { name: "Open" }));
      expect(modal.isVisible()).toBeTruthy();

      // Close Modal
      await userEvent.click(modal.findDismissButton()!.getElement());
      expect(modal.isVisible()).toBeFalsy();
  });
});