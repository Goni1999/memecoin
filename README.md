# SOLMEME - The Ultimate Meme Coin Landing Page

A Next.js landing page for SOLMEME, designed to mirror the aesthetic and functionality of solana.com but for meme coin culture. Built with modern web technologies and optimized for performance.

## 🚀 Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Responsive Design** - works on all devices
- **Modern Animations** with custom CSS animations
- **SEO Optimized** with proper meta tags
- **Performance Optimized** with Next.js best practices

## 🎨 Design

The landing page includes:

- **Hero Section** - Eye-catching introduction with animated gradients
- **Stats Section** - Live data display with engaging metrics
- **Features Section** - Highlighting SOLMEME's key benefits
- **News Section** - Latest announcements and updates
- **Community Section** - Social platforms and community stats
- **Footer** - Comprehensive links and information

## 🛠️ Tech Stack

- [Next.js 14](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Lucide React](https://lucide.dev/) - Icons

## 📦 Installation

1. **Clone the repository** (if applicable):
   ```bash
   git clone <repository-url>
   cd solmeme-landing
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and visit:
   ```
   http://localhost:3000
   ```

## 🏗️ Project Structure

```
solmeme-landing/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles with Tailwind
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Main page component
├── components/            # React components
│   ├── Navbar.tsx         # Navigation component
│   ├── Hero.tsx           # Hero section
│   ├── Stats.tsx          # Statistics section
│   ├── Features.tsx       # Features showcase
│   ├── News.tsx           # News and announcements
│   ├── Community.tsx      # Community platforms
│   └── Footer.tsx         # Site footer
├── public/                # Static assets
├── next.config.js         # Next.js configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies and scripts
```

## 🎯 Key Components

### Hero Section
- Animated gradient background
- Compelling meme-focused messaging
- Call-to-action buttons
- Partner logos display

### Stats Section
- Real-time style metrics
- Animated counters
- Interactive elements
- Mobile-responsive grid

### Features Section
- Four key benefit highlights
- Animated cards
- Case study examples
- Responsive design

### News Section
- Latest announcements
- Featured article layout
- Newsletter signup
- Category filtering

### Community Section
- Social platform links
- Member counts
- Community guidelines
- Call-to-action

## 🎨 Customization

### Colors
The design uses Solana's color palette:
- **Primary Purple**: `#9945FF`
- **Secondary Green**: `#14F195`
- **Dark Background**: `#000000`

### Typography
- **Font Family**: Inter (loaded from Google Fonts)
- **Responsive sizing**: Using clamp() for fluid typography
- **Font weights**: 300, 400, 500, 600, 700, 800, 900

### Animations
- **Fade up**: Elements animate in from bottom
- **Stagger**: Sequential animation delays
- **Hover effects**: Interactive element transitions
- **Scroll animations**: Intersection Observer based

## 📱 Responsive Design

The landing page is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px
- **Large Desktop**: > 1440px

## 🚀 Performance

- **Next.js optimizations**: Automatic code splitting, image optimization
- **CSS optimizations**: Tailwind CSS purging unused styles
- **Font optimization**: Next.js font optimization
- **Bundle analysis**: Built-in Next.js bundle analyzer

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Environment Variables

Create a `.env.local` file for any environment-specific variables:

```env
# Example environment variables
NEXT_PUBLIC_SITE_URL=https://solmeme.com
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id
```

## 🌐 Deployment

The application can be deployed to various platforms:

### Vercel (Recommended)
```bash
npm run build
# Deploy to Vercel
```

### Netlify
```bash
npm run build
# Deploy to Netlify
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 📄 License

This project is created for demonstration purposes. Please ensure you have proper licensing for any production use.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions or support:
- Create an issue in the repository
- Contact the development team
- Check the documentation

---

**Built with ❤️ for the meme community** # meme2
