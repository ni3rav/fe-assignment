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
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { ErrorCard } from "@/components/ui/error-card";
import mockData from "./mock-orders.json";

type Order = {
  orderId: string;
  customerName: string;
  pizzaType: string;
  quantity: number;
  orderDate: string;
  status: string;
};

type OrderData = {
  orders: Order[];
};

type SortField = "orderId" | "orderDate" | "customerName";
type SortOrder = "asc" | "desc";
type StatusFilter =
  | "All"
  | "Pending"
  | "Preparing"
  | "Out for Delivery"
  | "Delivered"
  | "Cancelled";

const getStatusColor = (status: string): string => {
  switch (status) {
    case "Pending":
      return "bg-yellow-500";
    case "Preparing":
      return "bg-blue-500";
    case "Out for Delivery":
      return "bg-purple-500";
    case "Delivered":
      return "bg-green-500";
    case "Cancelled":
      return "bg-red-500";
    default:
      return "bg-gray-500";
  }
};

const getOrderIdNumber = (orderId: string): number => {
  return parseInt(orderId.replace("PZA", ""));
};

const getDateValue = (dateStr: string): number => {
  return new Date(dateStr).getTime();
};

export default function OrdersPage() {
  const [sortField, setSortField] = useState<SortField>("orderDate");
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("All");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    const loadOrders = async () => {
      try {
        setIsLoading(true);
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setOrders((mockData as OrderData).orders);
      } catch (err) {
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    };

    loadOrders();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <ErrorCard
        title="Failed to load orders"
        message={error.message}
        retry={() => window.location.reload()}
      />
    );
  }

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  const filteredAndSortedOrders = orders
    .filter((order) => statusFilter === "All" || order.status === statusFilter)
    .sort((a, b) => {
      const modifier = sortOrder === "asc" ? 1 : -1;

      if (sortField === "orderDate") {
        return (
          (getDateValue(a.orderDate) - getDateValue(b.orderDate)) * modifier
        );
      }

      if (sortField === "orderId") {
        return (
          (getOrderIdNumber(a.orderId) - getOrderIdNumber(b.orderId)) *
          modifier
        );
      }

      // For customerName, keep using string comparison
      if (a[sortField] < b[sortField]) return -1 * modifier;
      if (a[sortField] > b[sortField]) return 1 * modifier;
      return 0;
    });

  const SortButton = ({
    field,
    children,
  }: {
    field: SortField;
    children: React.ReactNode;
  }) => (
    <Button
      variant="ghost"
      onClick={() => handleSort(field)}
      className="font-semibold"
    >
      {children}
      {sortField === field && (
        <span className="ml-1">{sortOrder === "asc" ? "↑" : "↓"}</span>
      )}
    </Button>
  );

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Pizza Orders</CardTitle>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <div className="flex gap-2">
              {[
                "All",
                "Pending",
                "Preparing",
                "Out for Delivery",
                "Delivered",
                "Cancelled",
              ].map((status) => (
                <Button
                  key={status}
                  variant={statusFilter === status ? "default" : "outline"}
                  onClick={() => setStatusFilter(status as StatusFilter)}
                  className={isMobile ? "text-sm px-2" : ""}
                >
                  {status}
                </Button>
              ))}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {isMobile ? (
            <div className="space-y-4">
              {filteredAndSortedOrders.map((order) => (
                <Card key={order.orderId}>
                  <CardContent className="pt-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <div className="font-semibold">{order.orderId}</div>
                        <div className="text-sm text-gray-600">
                          {order.customerName}
                        </div>
                      </div>
                      <Badge className={getStatusColor(order.status)}>
                        {order.status}
                      </Badge>
                    </div>
                    <div className="text-sm">
                      <div>Pizza: {order.pizzaType}</div>
                      <div>Quantity: {order.quantity}</div>
                      <div>Date: {order.orderDate}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>
                    <SortButton field="orderId">Order ID</SortButton>
                  </TableHead>
                  <TableHead>
                    <SortButton field="customerName">Customer Name</SortButton>
                  </TableHead>
                  <TableHead>Pizza Type</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>
                    <SortButton field="orderDate">Order Date</SortButton>
                  </TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredAndSortedOrders.map((order) => (
                  <TableRow key={order.orderId}>
                    <TableCell className="font-medium">
                      {order.orderId}
                    </TableCell>
                    <TableCell>{order.customerName}</TableCell>
                    <TableCell>{order.pizzaType}</TableCell>
                    <TableCell>{order.quantity}</TableCell>
                    <TableCell>{order.orderDate}</TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(order.status)}>
                        {order.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
