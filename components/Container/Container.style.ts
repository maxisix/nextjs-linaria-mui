import { css } from '@linaria/core'

export const styles = {
  container: css`
    width: 100%;
    margin-left: auto;
    margin-right: auto;

    @media (min-width: 600px) {
      max-width: 520px;
    }

    @media (min-width: 1024px) {
      max-width: 896px;
    }

    @media (min-width: 1280px) {
      max-width: 1152px;
    }
  `,

  margin: css`
    --margin: 16px 
    width: calc(100% - (var(--margin) * 2));

    @media (min-width: 420px)  {
      --margin: 32px 
    }

    @media (min-width: 600px)  {
      width: 100%;
    }
  `,
}
