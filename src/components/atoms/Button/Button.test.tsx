import React from 'react';
import {render, cleanup, fireEvent} from '@testing-library/react-native';
import {jest, expect, test, describe, afterAll} from '@jest/globals';

import Button from './index';

afterAll(cleanup);

describe('<Button />', () => {
  test('Calls onPress function', async () => {
    // Mocking onPress method so we can check if its called or not
    const onPress = jest.fn();

    // Rendering Button component using react-native-test-renderer.
    const {getByTestId} = await render(
      <Button
        label={'label'}
        onPress={() => {
          onPress();
        }}
      />,
    );

    // Grabbing our button component to perform actions on it.
    const button = getByTestId('button-container');

    // Here we are firing on press event
    fireEvent.press(button);

    // Asserting if given mock method is called once or not.
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  // test('Verify the text rendered into the button', async () => {
  //   const {getByTestId} = await render(<Button text={'Siguiente'} />);
  //   const button = getByTestId('genericButton');

  //   expect(button).toHaveTextContent('Siguiente');
  // });

  // test('Verify button disabled', async () => {
  //   const {getByText} = await render(<Button text={'Siguiente'} disabled />);
  //   const button = getByText('Siguiente');

  //   expect(button).toBeDisabled();
  // });
});
