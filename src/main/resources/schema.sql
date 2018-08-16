create table if not exists vehicleinfo(id bigint auto_increment, hs varchar(255),label varchar(255),lat double , lng double
 ,PRIMARY KEY (id));

 create table if not exists coordinate(id bigint auto_increment,lat double , lng double
  ,PRIMARY KEY (id));