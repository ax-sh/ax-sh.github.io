import { QueryClientProviderWrapper } from "@/ui/query-client-provider.wrapper";
import { BannerSection } from "@/ui/sections/banner-section";
import { render, screen } from "@testing-library/react";

describe(BannerSection.name, () => {
  it("should match classname", () => {
    render(
      <main>
        <BannerSection />
      </main>,
      { wrapper: QueryClientProviderWrapper }
    );
    expect(screen.getByRole("main").firstChild).toHaveAttribute(
      "class",
      "prose prose-xl prose-stone text-white prose-headings:text-green-500"
    );
  });
});
