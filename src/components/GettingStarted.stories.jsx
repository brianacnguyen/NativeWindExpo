import Button from './Button';
import { CustomTheme } from '../utils/color-theme';
import { ThemeProvider } from '../providers/ThemeProviders';

const StarterComponent = () => (
  <>
    <Button title="Brand Theme" />
    <ThemeProvider customTheme={CustomTheme.BrandInverse} theme="light">
      <Button title="Brand Light Static Theme" />
    </ThemeProvider>
    <ThemeProvider customTheme={CustomTheme.BrandInverse} theme="dark">
      <Button title="Brand Dark Static Theme" />
    </ThemeProvider>
    <ThemeProvider customTheme={CustomTheme.BrandInverse}>
      <Button title="BrandInverse Theme" />
    </ThemeProvider>
    <ThemeProvider customTheme={CustomTheme.BrandEvolution}>
      <Button title="BrandEvolution Theme" />
    </ThemeProvider>
  </>
);

const meta = {
  title: 'Button',
  component: StarterComponent,
};

export default meta;

export const GettingStarted = {
  args: {},
  parameters: {
    noBackground: true,
  },
};
