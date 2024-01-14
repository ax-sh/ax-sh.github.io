import Home from "@/app/page";
import { QueryClientProviderWrapper } from "@/ui/query-client-provider.wrapper";
import { render, screen } from "@testing-library/react";

describe("Verify home page", () => {
  it("should have link to past work", () => {
    render(<Home />, { wrapper: QueryClientProviderWrapper });

    const link = "https://bit.ly/4418VWz";
    const workLink = screen.getByRole("link", { name: /works/i });
    expect(workLink).toBeInTheDocument();
    expect(workLink).toHaveAttribute("href", link);
  });
});
