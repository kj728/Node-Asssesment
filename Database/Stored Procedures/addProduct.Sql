USE NodeAssessment;
GO
CREATE OR ALTER PROCEDURE addProduct(@pid VARCHAR(255), @pname VARCHAR(255), @price INT)
AS
BEGIN
    INSERT INTO Products
        (PID,PNAME,PRICE)
    VALUES
        (@pid, @pname, @price)
END