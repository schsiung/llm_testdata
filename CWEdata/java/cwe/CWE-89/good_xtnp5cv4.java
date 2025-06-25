package com.dextra.injectit.database;

public class MockDatabase {

	public static void execute() {

		String create = "CREATE TABLE user (name VARCHAR(50) NOT NULL, "
				+ "password VARCHAR(100) NOT NULL, "
				+ "creditCardNumber VARCHAR(12) NOT NULL)";
		Database.execute(create);
		
		String sp = "CREATE PROCEDURE sp_getUser "
				+ "(@user VARCHAR(100)) "
				+ "AS "
				+ "BEGIN "
				+ "SELECT * FROM USER WHERE NAME = @user "
				+ "END";
		Database.execute(sp);

		insertUser("Guilherme", "EuAmoGatinhos", "123456789012");
		insertUser("Bruno", "LaFooon", "187456779012");
		insertUser("Jefferson", "DaniboySZ", "487456789012");
		insertUser("Leonardo", "MinoZica2014", "587456789112");
		insertUser("Renato", "Paulas2", "787456789112");

	}

	private static void insertUser(String name, String password,
			String creditCardNumber) {
		String insert = String
				.format("INSERT INTO user (name, password, creditCardNumber) VALUES ('%s', '%s', '%s')",
						name, password, creditCardNumber);
		Database.execute(insert);
	}

}
