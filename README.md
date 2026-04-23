This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

### 6. Testimonial Navigation Adjustment (Responsive UX Improvement)

In the Testimonials section, the navigation arrows were slightly adjusted for mobile and tablet viewports.

- On **desktop**, the layout strictly follows the Figma design, with arrows positioned as specified.
- On **mobile and tablet**, the arrows were repositioned to be more accessible and visually centered within the content.

#### Reason for Adjustment
The original desktop positioning does not translate well to smaller screens due to:
- Limited horizontal space
- Reduced touch accessibility
- Potential overlap or awkward spacing with testimonial cards

This adjustment was made to:
- Improve usability on touch devices
- Ensure better visual balance
- Maintain a clean and intuitive user experience across all screen sizes

The change was implemented using Tailwind’s responsive utilities (`md:`, `lg:`), ensuring that the original design intent is preserved on larger screens while optimizing smaller viewports.