"use client";

import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useMediaQuery } from "@/hooks/use-media-query";

const mockOrders = [
  {
    orderId: "PZA001",
    customerName: "John Doe",
    pizzaType: "Margherita",
    quantity: 1,
    orderDate: "2025-05-23 10:30",
    status: "Delivered",
  },
  {
    orderId: "PZA002",
    customerName: "Jane Smith",
    pizzaType: "Pepperoni",
    quantity: 2,
    orderDate: "2025-05-23 11:00",
    status: "Out for Delivery",
  },
  {
    orderId: "PZA003",
    customerName: "Alice Johnson",
    pizzaType: "Veggie Supreme",
    quantity: 1,
    orderDate: "2025-05-23 12:15",
    status: "Preparing",
  },
  {
    orderId: "PZA004",
    customerName: "Bob Brown",
    pizzaType: "Margherita",
    quantity: 3,
    orderDate: "2025-05-23 13:00",
    status: "Pending",
  },
  {
    orderId: "PZA005",
    customerName: "Charlie Davis",
    pizzaType: "Pepperoni",
    quantity: 1,
    orderDate: "2025-05-23 14:30",
    status: "Cancelled",
  },
];

const getStatusBadgeVariant = (
  status: string
): "default" | "secondary" | "destructive" | "outline" => {
  switch (status) {
    case "Delivered":
      return "default";
    case "Out for Delivery":
      return "secondary";
    case "Preparing":
      return "outline";
    case "Pending":
      return "secondary";
    case "Cancelled":
      return "destructive";
    default:
      return "default";
  }
};

export default function OrdersPage() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <div className="space-y-4 sm:space-y-6 md:space-y-8">
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
          Pizza Orders
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground">
          Manage and track your pizza orders
        </p>
      </div>

      {isDesktop ? (
        <div className="rounded-lg border shadow-sm overflow-hidden overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Order ID</TableHead>
                <TableHead>Customer Name</TableHead>
                <TableHead>Pizza Type</TableHead>
                <TableHead className="text-right">Quantity</TableHead>
                <TableHead>Order Date</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockOrders.map((order) => (
                <TableRow key={order.orderId}>
                  <TableCell className="font-medium">{order.orderId}</TableCell>
                  <TableCell>{order.customerName}</TableCell>
                  <TableCell>{order.pizzaType}</TableCell>
                  <TableCell className="text-right">{order.quantity}</TableCell>
                  <TableCell>{order.orderDate}</TableCell>
                  <TableCell>
                    <Badge
                      variant={getStatusBadgeVariant(order.status)}
                      className="whitespace-nowrap"
                    >
                      {order.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <div className="space-y-4">
          {mockOrders.map((order) => (
            <Card key={order.orderId}>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-sm font-medium">
                    Order {order.orderId}
                  </CardTitle>
                  <Badge
                    variant={getStatusBadgeVariant(order.status)}
                    className="whitespace-nowrap"
                  >
                    {order.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-1 text-sm">
                  <div className="text-muted-foreground">Customer:</div>
                  <div>{order.customerName}</div>

                  <div className="text-muted-foreground">Pizza:</div>
                  <div>{order.pizzaType}</div>

                  <div className="text-muted-foreground">Quantity:</div>
                  <div>{order.quantity}</div>

                  <div className="text-muted-foreground">Date:</div>
                  <div>{order.orderDate}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
