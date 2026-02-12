import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const products = [
  {
    name: 'Lunar Series Mechanical Keyboard',
    description: 'Tenkeyless design with tactile brown switches and white backlighting.',
    price: 89.99,
    createdAt: '2026-02-12T09:00:00Z',
    updatedAt: '2026-02-12T09:00:00Z',
  },
  {
    name: 'Apex Wireless Mouse',
    description: 'Ultra-lightweight 54g chassis with a 26k DPI optical sensor.',
    price: 129.5,
    createdAt: '2026-02-12T09:15:00Z',
    updatedAt: '2026-02-12T09:15:00Z',
  },
  {
    name: 'Titanium Desk Mat',
    description: null,
    price: 35.0,
    createdAt: '2026-02-12T09:30:00Z',
    updatedAt: '2026-02-12T09:30:00Z',
  },
  {
    name: 'Studio Monitor Speakers',
    description: 'Active near-field monitors for precise audio production.',
    price: 299.0,
    createdAt: '2026-02-12T10:00:00Z',
    updatedAt: '2026-02-12T10:00:00Z',
  },
  {
    name: 'USB-C Multi-Port Hub',
    description: '8-in-1 adapter with 4K HDMI, Power Delivery, and SD card slot.',
    price: 55.25,
    createdAt: '2026-02-12T10:10:00Z',
    updatedAt: '2026-02-12T10:10:00Z',
  },
  {
    name: 'Noise-Cancelling Headphones',
    description: 'Over-ear wireless headphones with 40-hour battery life.',
    price: 249.99,
    createdAt: '2026-02-12T10:20:00Z',
    updatedAt: '2026-02-12T10:20:00Z',
  },
  {
    name: 'Ergo-Lift Laptop Stand',
    description: 'Adjustable aluminum stand compatible with 13-17 inch laptops.',
    price: 42.0,
    createdAt: '2026-02-12T10:30:00Z',
    updatedAt: '2026-02-12T10:30:00Z',
  },
  {
    name: 'Streamer Mic Pro',
    description: 'Cardioid condenser microphone with built-in pop filter.',
    price: 115.0,
    createdAt: '2026-02-12T10:45:00Z',
    updatedAt: '2026-02-12T10:45:00Z',
  },
  {
    name: 'Smart RGB LED Strip',
    description: null,
    price: 24.5,
    createdAt: '2026-02-12T11:00:00Z',
    updatedAt: '2026-02-12T11:00:00Z',
  },
  {
    name: 'Portable SSD 1TB',
    description: 'High-speed NVMe storage with rugged, water-resistant exterior.',
    price: 159.0,
    createdAt: '2026-02-12T11:15:00Z',
    updatedAt: '2026-02-12T11:15:00Z',
  },
  {
    name: 'Midnight Blend Whole Bean Coffee',
    description:
      'Dark roast with notes of dark chocolate and toasted marshmallow. ethically sourced.',
    price: 18.5,
    createdAt: new Date('2026-02-12T14:00:00Z'),
    updatedAt: new Date('2026-02-12T14:00:00Z'),
  },
  {
    name: 'Hand-Poured Soy Candle (Sandalwood)',
    description: '40-hour burn time in a reusable glass jar. Lead-free cotton wick.',
    price: 24.0,
    createdAt: new Date('2026-02-12T14:10:00Z'),
    updatedAt: new Date('2026-02-12T14:10:00Z'),
  },
  {
    name: 'Ceramic Matte Dinner Plate Set',
    description: 'Set of 4 dishwasher-safe plates with a minimalist speckled finish.',
    price: 65.0,
    createdAt: new Date('2026-02-12T14:20:00Z'),
    updatedAt: new Date('2026-02-12T14:20:00Z'),
  },
  {
    name: 'Organic Cotton Throw Blanket',
    description: 'Breathable waffle-weave texture, perfect for all seasons.',
    price: 45.99,
    createdAt: new Date('2026-02-12T14:30:00Z'),
    updatedAt: new Date('2026-02-12T14:30:00Z'),
  },
  {
    name: 'Stainless Steel Bento Box',
    description: 'Leak-proof three-compartment lunch box for eco-friendly meal prep.',
    price: 29.5,
    createdAt: new Date('2026-02-12T14:40:00Z'),
    updatedAt: new Date('2026-02-12T14:40:00Z'),
  },
  {
    name: 'Natural Bristle Body Brush',
    description: 'Designed for dry brushing to improve circulation and exfoliation.',
    price: 15.0,
    createdAt: new Date('2026-02-12T14:50:00Z'),
    updatedAt: new Date('2026-02-12T14:50:00Z'),
  },
  {
    name: 'Velvet Self-Care Journal',
    description: 'Guided daily prompts for mindfulness and gratitude. 200 pages.',
    price: 22.0,
    createdAt: new Date('2026-02-12T15:00:00Z'),
    updatedAt: new Date('2026-02-12T15:00:00Z'),
  },
  {
    name: 'Artisan Olive Oil (500ml)',
    description: 'Cold-pressed extra virgin olive oil from a family-run grove in Sicily.',
    price: 34.0,
    createdAt: new Date('2026-02-12T15:10:00Z'),
    updatedAt: new Date('2026-02-12T15:10:00Z'),
  },
  {
    name: 'Eco-Friendly Yoga Mat',
    description: 'Made from natural tree rubber with high-grip texture. PVC-free.',
    price: 88.0,
    createdAt: new Date('2026-02-12T15:20:00Z'),
    updatedAt: new Date('2026-02-12T15:20:00Z'),
  },
  {
    name: 'Woven Rattan Plant Stand',
    description: null,
    price: 38.75,
    createdAt: new Date('2026-02-12T15:30:00Z'),
    updatedAt: new Date('2026-02-12T15:30:00Z'),
  },
];

const main = async () => {
  for (const product of products) {
    await prisma.product.create({
      data: product,
    });
  }
  console.log('Seeded products data successfully.');
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
