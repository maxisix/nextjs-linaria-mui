import { css } from '@linaria/core'

export const styles = {
  card: css`
    max-width: 627px;
    border-radius: 8px;
    box-shadow: 0 3px 7px 0 rgb(0 0 0 / 5%);
    overflow: hidden;
    margin-bottom: 24px;
  `,
  content: css`
    padding: 24px;

    font-size: 28px;
  `,
  header: css``,
  footer: css`
    padding: 8px 16px;
  `,

  button: css`
    padding: 5px 15px;
    border: 1px solid currentColor;
    border-color: currentColor;
    border-radius: 20px;
    font-weight: 600;
    cursor: pointer;
    color: black;
  `,

  buttonRoot: css`
    &:hover {
      background-color: black;
      color: white;
    }
  `,
}
