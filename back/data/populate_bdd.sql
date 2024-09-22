-- Insertion d'un utilisateur
INSERT INTO users (username, password, email) VALUES
('charlievan', 'test', 'charlie@gmail.com');

-- Insertion des catégories
INSERT INTO categories (name, type, icon_path) VALUES
('Salary', 'income', '/assets/icones/money.png'),
('Groceries', 'expense', '/assets/icones/epicerie.png'),
('Rent', 'expense', '/assets/icones/rent.png'),
('Transport', 'expense', '/assets/icones/Car.svg'),
('Food', 'expense', '/assets/icones/Food.svg'),
('Savings', 'income', '/assets/icones/Monnaie.svg');

-- Insertion des transactions
INSERT INTO transactions (user_id, category_id, amount, description, date) VALUES
(1, 1, 4000.00, 'Monthly Salary', '2024-04-30 18:27:00'),
(1, 2, -100.00, 'Weekly Groceries', '2024-04-24 17:00:00'),
(1, 3, -674.40, 'Monthly Rent', '2024-04-15 08:30:00'),
(1, 4, -50.00, 'Gas', '2024-04-20 14:15:00'),
(1, 5, -80.00, 'Restaurant', '2024-04-22 20:30:00'),
(1, 6, 200.00, 'Savings Transfer', '2024-04-30 19:00:00');

-- Insertion d'un budget
INSERT INTO budgets (user_id, category_id, amount, start_date, end_date) VALUES
(1, 2, 600.00, '2024-04-01', '2024-04-30'),
(1, 4, 200.00, '2024-04-01', '2024-04-30'),
(1, 5, 300.00, '2024-04-01', '2024-04-30');

-- Insertion d'un objectif financier
INSERT INTO financial_goals (user_id, name, target_amount, current_amount, deadline) VALUES
(1, 'Summer Vacation', 1500.00, 500.00, '2025-06-01');

-- Insertion de notifications
INSERT INTO notifications (user_id, message) VALUES
(1, 'You''ve reached 30% of your monthly budget!'),
(1, 'Don''t forget to pay your rent this week.');

-- Insertion des paramètres utilisateur
INSERT INTO user_settings (user_id, theme, currency, language) VALUES
(1, 'light', 'USD', 'en-US');