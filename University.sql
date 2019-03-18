USE MASTER;
GO

CREATE DATABASE University
GO

USE University
GO

CREATE TABLE Studnet(
StudentID INT PRIMARY KEY IDENTITY(1,1) NOT NULL,
StudentName VARCHAR(50) NOT NULL,
StudentSurname VARCHAR(50) NOT NULL)
GO

CREATE TABLE Residents(
ResID INT PRIMARY KEY IDENTITY(1,1) NOT NULL,
ResName VARCHAR(50) NOT NULL)
GO

CREATE TABLE StudentsRes(
ID INT PRIMARY KEY IDENTITY(1,1) NOT NULL,
RegistrationYear VARCHAR(4) NOT NULL,
StudentID INT NOT NULL,
ResID INT NOT NULL,
FOREIGN KEY(StudentID) REFERENCES Studnet(StudentID),
FOREIGN KEY(ResID) REFERENCES Residents(ResID))


USE University
GO

INSERT INTO Studnet VALUES ('Jaime','De Carvalho'),('Scooter','Jones'),('Trucker','Smith'),('Nicole','Pottek'),('Sheldon','Loser'),('Bianca','Botha'),('Mostepe','Matseke'),('Jane','Laugh')
GO

INSERT INTO Residents VALUES ('Erika'),('Olienhoute'),('Mags')
GO

INSERT INTO StudentsRes VALUES ('2017',1,1),('2016',2, 2),('2017',3,2),('2017',4,1),('2017',5,2),('2016',6,3),('2017',7,2),('2016',8,2)
GO
