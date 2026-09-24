import { PrismaClient } from "@prisma/client/extension";
const prisma = new PrismaClient();
async function main() {
  await prisma.$executeRaw`DELETE FORM 'Coffee'`;
  await prisma.$executeRaw`DELETE FORM 'Feature'`;
  await prisma.$executeRaw`DELETE FORM 'Testimonial'`;
  // Insert Coffees
  await prisma.$executeRaw`
    INSERT INTO "Coffee" (name, origin, notes, price, emoji, badge)
    VALUES
      ('Ethiopian Yirgacheffe', 'Ethiopia', 'Floral, bergamot, honey', 18.5, '☕', 'Best Seller'),
      ('Colombian Supremo', 'Colombia', 'Caramel, nutty, balanced', 16.0, '☕', NULL),
      ('Guatemala Antigua', 'Guatemala', 'Chocolate, spice, smooth', 17.5, '☕', 'New'),
      ('Kenya AA', 'Kenya', 'Blackcurrant, bright acidity', 19.0, '☕', NULL),
      ('Brazil Santos', 'Brazil', 'Nutty, low acidity, creamy', 14.5, '☕', NULL),
      ('Sumatra Mandheling', 'Indonesia', 'Earthy, herbal, full body', 17.0, '☕', NULL)
  `;

  // Insert Features
  await prisma.$executeRaw`
    INSERT INTO "Feature" (icon, title, description)
    VALUES
      ('Leaf', 'Ethically Sourced', 'We partner directly with small farms across Colombia, Ethiopia, and Guatemala for fair trade beans.'),
      ('Flame', 'Small Batch Roasting', 'Every batch is roasted in-house with precision to unlock the unique flavor profile of each origin.'),
      ('Clock', 'Always Fresh', 'Beans are roasted weekly and shipped within 48 hours so you get peak flavor every time.'),
      ('Trophy', 'Award Winning', 'Recognized by the Specialty Coffee Association for excellence in quality and sustainability.')
  `;

  // Insert Testimonials
  await prisma.$executeRaw`
    INSERT INTO "Testimonial" (name, role, content, rating)
    VALUES
      ('Sarah Johnson', 'Coffee Enthusiast', 'The Ethiopian Yirgacheffe is incredible. Bright, floral, and perfectly roasted.', 5),
      ('Michael Chen', 'Cafe Owner', 'We switched to Coffee Aroma for our shop. Customers constantly ask what beans we are using.', 5),
      ('Emma Rodriguez', 'Home Barista', 'Freshness makes such a difference. The beans arrive within days of roasting.', 5)
  `;

  console.log("Seed data inserted successfully");
}
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
