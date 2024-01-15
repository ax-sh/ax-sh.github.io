import Home from "@/app/page";
import { CTALinks } from "@/ui/cta-links";
import { QueryClientProviderWrapper } from "@/ui/query-client-provider.wrapper";
import { render, screen } from "@testing-library/react";

describe("Verify home page", () => {
  const actualProjectsLink = "https://bit.ly/4418VWz";
  it("should have link to past work", () => {
    render(<Home />, { wrapper: QueryClientProviderWrapper });

    const workLink = screen.getByRole("link", { name: /projects/i });
    expect(workLink).toBeInTheDocument();
    expect(workLink).toHaveAttribute("href", actualProjectsLink);
  });

  it("should check cta links", () => {
    render(<CTALinks />);
    screen.logTestingPlaygroundURL();
    const projectLink = screen.getByRole("link", { name: /projects/i });
    const workLink = screen.getByRole("link", {
      name: /works/i
    });
    expect(workLink).toHaveAttribute("href", "https://codesandbox.io/u/ax-sh");
    expect(projectLink).toHaveAttribute("href", actualProjectsLink);
  });
});
