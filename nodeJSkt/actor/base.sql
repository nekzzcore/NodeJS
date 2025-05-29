CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    --
    login TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    password TEXT NOT NULL,
    --
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP
)
CREATE TABLE products(
    id SERIAL PRIMARY KEY,
    --
    title TEXT NOT NULL,
    price FLOAT NOT NULL,
    old_price FLOAT,
    description TEXT NOT NULL,
    type_id INT NOT NULL,
    FOREIGN KEY (type_id) REFERENCES product_types(id),
    filter_item_id INT NOT NULL,
    FOREIGN KEY (filter_item_id) REFERENCES product_filter_items(id),
    --
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP
)

CREATE TABLE basket_items(
    id SERIAL PRIMARY KEY,
    --
    count INT NOT NULL DEFAULT 1,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id),
    product_id INT NOT NULL,
    FOREIGN KEY (product_id) REFERENCES products(id)
    --
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP
)

CREATE TABLE product_images(
    id SERIAL PRIMARY KEY,
    --
    src TEXT NOT NULL,
    product_id INT NOT NULL,
    FOREIGN KEY (product_id) REFERENCES products(id),
    --
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP
)

CREATE TABLE product_features(
    id SERIAL PRIMARY KEY,
    --
    icon TEXT NOT NULL,
    title TEXT NOT NULL,
    value TEXT NOT NULL,
    product_id INT NOT NULL,
    FOREIGN KEY (product_id) REFERENCES products(id),
    --
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP
)

CREATE TABLE product_types(
    id SERIAL PRIMARY KEY,
    --
    title TEXT NOT NULL,
    --
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP  
)
CREATE TABLE product_filters(
    id SERIAL PRIMARY KEY,
    --
    title TEXT NOT NULL,
    type_id INT NOT NULL,
    FOREIGN KEY (type_id) REFERENCES product_types(id),
    --
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP  
)

CREATE TABLE product_filter_items(
    id SERIAL PRIMARY KEY,
    --
    title TEXT NOT NULL,
    product_filter_id INT NOT NULL,
    FOREIGN KEY (product_filter_id) REFERENCES product_filters(id),
    --
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP  
)