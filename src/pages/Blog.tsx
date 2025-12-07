import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CartDrawer } from '@/components/CartDrawer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { CartProvider } from '@/context/CartContext';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const blogPosts = [
  {
    id: 1,
    title: 'Discover the Rich Flavors of Our Kienyeji Produce',
    excerpt: 'Explore the unique tastes that our traditional vegetables bring to your table, connecting you with nature\'s bounty.',
    date: 'October 11, 2024',
    author: 'Maggy\'s Kienyeji LTD',
    category: 'Vegetables',
    link: 'https://medium.com/@maggyskienyeji/discover-the-rich-flavors-of-our-kienyeji-produce-e1e2c1fe9261',
  },
  {
    id: 2,
    title: 'Sustainability at Maggy\'s: Our Farming Practices',
    excerpt: 'Learn about our commitment to sustainable farming and how we grow our crops with care for the environment.',
    date: 'October 11, 2024',
    author: 'Maggy\'s Kienyeji LTD',
    category: 'Farming',
    link: '#',
  },
  {
    id: 3,
    title: 'Nutritional Benefits of Kienyeji Vegetables',
    excerpt: 'Delve into the health benefits of our locally sourced vegetables and how they can enhance your diet.',
    date: 'October 11, 2024',
    author: 'Maggy\'s Kienyeji LTD',
    category: 'Health',
    link: '#',
  },
  {
    id: 4,
    title: 'Traditional Recipes with Indigenous Vegetables',
    excerpt: 'Discover delicious recipes using our dried indigenous vegetables that your family will love.',
    date: 'October 11, 2024',
    author: 'Maggy\'s Kienyeji LTD',
    category: 'Recipes',
    link: '#',
  },
];

const categories = [
  { name: 'Vegetables', count: 12 },
  { name: 'Fruits', count: 22 },
  { name: 'Juice', count: 37 },
  { name: 'Dried Goods', count: 42 },
];

const Blog = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          {/* Hero Section */}
          <section className="relative py-24 lg:py-32 gradient-nature">
            <div className="container mx-auto px-4 text-center">
              <span className="text-secondary-foreground/80 text-sm uppercase tracking-wider">
                Home / Blog
              </span>
              <h1 className="font-display text-4xl lg:text-6xl font-bold text-primary-foreground mt-4">
                Blog
              </h1>
            </div>
          </section>

          {/* Blog Content */}
          <section className="py-16 lg:py-24">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-3 gap-12">
                {/* Blog Posts */}
                <div className="lg:col-span-2 space-y-8">
                  {blogPosts.map((post) => (
                    <article
                      key={post.id}
                      className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 border border-border"
                    >
                      <div className="p-6 lg:p-8">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            {post.author}
                          </span>
                        </div>
                        <h2 className="font-display text-2xl font-bold text-foreground mb-3 hover:text-primary transition-colors">
                          <a href={post.link} target="_blank" rel="noopener noreferrer">
                            {post.title}
                          </a>
                        </h2>
                        <p className="text-muted-foreground mb-6">
                          {post.excerpt}
                        </p>
                        <Button asChild variant="default">
                          <a href={post.link} target="_blank" rel="noopener noreferrer">
                            Read more
                            <ArrowRight className="w-4 h-4" />
                          </a>
                        </Button>
                      </div>
                    </article>
                  ))}
                </div>

                {/* Sidebar */}
                <aside className="space-y-8">
                  {/* Search */}
                  <div className="bg-card rounded-2xl p-6 border border-border">
                    <h3 className="font-display text-lg font-bold text-foreground mb-4">
                      Search
                    </h3>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search..."
                        className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>

                  {/* Categories */}
                  <div className="bg-card rounded-2xl p-6 border border-border">
                    <h3 className="font-display text-lg font-bold text-foreground mb-4">
                      Categories
                    </h3>
                    <ul className="space-y-3">
                      {categories.map((category) => (
                        <li
                          key={category.name}
                          className="flex items-center justify-between text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                        >
                          <span>{category.name}</span>
                          <span className="text-sm">({category.count})</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Recent Blog */}
                  <div className="bg-card rounded-2xl p-6 border border-border">
                    <h3 className="font-display text-lg font-bold text-foreground mb-4">
                      Recent Blog
                    </h3>
                    <ul className="space-y-4">
                      {blogPosts.slice(0, 3).map((post) => (
                        <li key={post.id}>
                          <a
                            href={post.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-muted-foreground hover:text-primary transition-colors line-clamp-2"
                          >
                            {post.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </aside>
              </div>
            </div>
          </section>
        </main>
        <Footer />
        <CartDrawer />
        <WhatsAppButton />
      </div>
    </CartProvider>
  );
};

export default Blog;
