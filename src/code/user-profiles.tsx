"use client";

import React from "react";
import { Button } from "@/components/ui-shadcn/button";
import { Input } from "@/components/ui-shadcn/input";
import { Label } from "@/components/ui-shadcn/label";
import { Textarea } from "@/components/ui-shadcn/textarea";
import { Switch } from "@/components/ui-shadcn/switch";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui-shadcn/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui-shadcn/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui-shadcn/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui-shadcn/table";
import { CreditCard, User } from "lucide-react";

export const UserProfileLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="container mx-auto p-4">
    <h1 className="text-2xl font-bold mb-4">User Profile</h1>
    {children}
  </div>
);

export const UserProfilePage = () => (
  <div className="mt-10">
    <CardHeader>
      <CardTitle>Profile Information</CardTitle>
      <CardDescription>Update your personal information</CardDescription>
    </CardHeader>
    <CardContent>
      <form className="space-y-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          <Avatar className="h-20 w-20">
            <AvatarImage
              src="https://static.vecteezy.com/system/resources/thumbnails/019/900/306/small_2x/happy-young-cute-illustration-face-profile-png.png"
              alt="User"
            />
            <AvatarFallback>UN</AvatarFallback>
          </Avatar>
          <Button>Edit Profile</Button>
        </div>
        <div className="grid grid-cols-2 gap-4 py-10">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input id="firstName" placeholder="John" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input id="lastName" placeholder="Doe" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="john.doe@example.com" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" type="tel" placeholder="+628912381231231" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="birthdate">Birthdate</Label>
          <Input id="birthdate" type="date" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="gender">Gender</Label>
          <Select>
            <SelectTrigger id="gender">
              <SelectValue placeholder="Select gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="bio">Bio</Label>
          <Textarea id="bio" placeholder="Tell us about yourself" />
        </div>
      </form>
    </CardContent>
    <CardFooter>
      <Button>Save Changes</Button>
    </CardFooter>
  </div>
);

export const AccountSettingsPage = () => (
  <div>
    <CardHeader>
      <CardTitle>Account Settings</CardTitle>
      <CardDescription>Manage your account preferences</CardDescription>
    </CardHeader>
    <CardContent className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="currentPassword">Current Password</Label>
        <Input id="currentPassword" type="password" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="newPassword">New Password</Label>
        <Input id="newPassword" type="password" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="confirmPassword">Confirm New Password</Label>
        <Input id="confirmPassword" type="password" />
      </div>
      <div className="flex items-center justify-between">
        <div className="space-y-0.5">
          <Label htmlFor="notifications">Email Notifications</Label>
          <p className="text-sm text-muted-foreground">Receive email updates about your account</p>
        </div>
        <Switch id="notifications" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="language">Language Preference</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select language" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="en">English</SelectItem>
            <SelectItem value="es">Español</SelectItem>
            <SelectItem value="fr">Français</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </CardContent>
    <CardFooter>
      <Button>Save Settings</Button>
    </CardFooter>
  </div>
);

export const UserDashboard = () => (
  <div>
    <CardHeader>
      <CardTitle>User Dashboard</CardTitle>
      <CardDescription>Overview of your recent activity</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Payments</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$129.00</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Account Status</CardTitle>
              <User className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Active</div>
            </CardContent>
          </Card>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Recent Orders</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>#1234</TableCell>
                <TableCell>2023-05-01</TableCell>
                <TableCell>$99.99</TableCell>
                <TableCell>Completed</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>#1235</TableCell>
                <TableCell>2023-05-03</TableCell>
                <TableCell>$149.99</TableCell>
                <TableCell>Processing</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>#1236</TableCell>
                <TableCell>2023-05-05</TableCell>
                <TableCell>$79.99</TableCell>
                <TableCell>Shipped</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </CardContent>
  </div>
);
